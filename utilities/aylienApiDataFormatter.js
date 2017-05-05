const formatAylienData = (data) => {

  const dataParsed = data;

  return dataParsed.stories.map((story) => {
    let formattedStory = {};
    formattedStory.headline = story.title;
    formattedStory.url = story.links.permalink;
    formattedStory.media = story.media[0].url;
    formattedStory.summary = story.summary.sentences[0];
    return formattedStory;
  });

};

module.exports = formatAylienData;