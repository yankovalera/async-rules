function all(rules) {
    return {
      runIf: () => rules.some((rule) => rule.runIf()),
      run: async (context) => {
        const filteredRules = rules.filter((rule) => rule.runIf(context.input));

        for (const rule of filteredRules) {
          context.output.push(await rule.run(context));
        }

        return context;
      }
    };
  }


  module.exports = { all }