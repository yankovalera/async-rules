 const { workplaceLoader } = require('./loaders/workplace-loader')
 
 const multiply = {
    runIf: () => true,
    run: async (context) => {
       const workplaceData = await workplaceLoader.load(context.input.id)

       console.log(workplaceData);

       return workplaceData.value;
    }
}

module.exports = { multiply }