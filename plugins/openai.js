const { Configuration, OpenAIApi } = require("openai");
let handler = async (m, {conn, text}) => {
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: text,
});
m.reply(completion.data.choices[0].text);
}
handler.command = /^(ai)$/i

module.exports = handler
