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
        const id = item.sys.id;
        const img = item.fields.img.fields.file.url;
        const title = item.fields.title;
        const description = item.fields.description;
        const ingredients = item.fields.ingredients;

        return {
          id,
          img,
          title,
          description,
          ingredients,
        };
      });

      return sanitizedData;
    } catch (error) {
      console.log("Contentful error: ", error);
      throw error;
    }
  };

  return { getRecipes };
};

export default useContentful;
