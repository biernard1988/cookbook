import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "ki98gwhecfyo",
    accessToken: "PnlCW08hu90lMZw5o-lc53DxJbZZ_dqaC9gvOqpfNB8",
    host: "preview.contentful.com",
  });

  const getRecipes = async () => {
    try {
      const response = await client.getEntries({
        content_type: "recipes",
        select: "fields",
      });

      const sanitizedData = response.items.map((item) => {
        const img = item.fields.img.fields.file.url;
        const title = item.fields.title;
        const description = item.fields.description;

        return {
          img,
          title,
          description,
        };
      });

      return sanitizedData;
    } catch (error) {
      console.log("Contentful error: ", error);
    }
  };

  return { getRecipes };
};

export default useContentful;
