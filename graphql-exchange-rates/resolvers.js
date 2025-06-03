const Exchange = require('./models/ExchangeRate');

const resolvers = {
  Query: {
    async getExchangeRate(_, { src, tgt }) {
      if (src === tgt) {
        return { src, tgt, rate: 1, date: new Date().toISOString().split("T")[0] };
      }
      return await Exchange.findOne({ src, tgt }).sort({ date: -1 });
    }
  },
  Mutation: {
    async postExchangeRate(_, { info }) {
      if (info.src === info.tgt) {
        return { ...info, rate: 1 };
      }
      const date = info.date || new Date().toISOString().split('T')[0];
      const updated = await Exchange.findOneAndUpdate(
        { src: info.src, tgt: info.tgt, date },
        { rate: info.rate },
        { upsert: true, new: true }
      );
      return updated;
    },
    async deleteExchangeRate(_, { info }) {
      const deleted = await Exchange.findOneAndDelete({
        src: info.src,
        tgt: info.tgt,
        date: info.date
      });
      return deleted;
    }
  }
};

module.exports = resolvers;
