import { createClient } from "contentful";

const useContentfulsingle = () => {
  const client = createClient({
    space: "ki98gwhecfyo",
    accessToken: "PnlCW08hu90lMZw5o-lc53DxJbZZ_dqaC9gvOqpfNB8",
    host: "preview.contentful.com",
  });

  const getRecipe = async (id) => {
    try {
      const response = await client.getEntry(id);
      console.log(response);

      const title = response.fields.title;
      const img = response.fields.img.fields.file.url;
      const description = response.fields.description;
      const ingredient = response.fields.ingredients;
      // create variables for description and ingredients
      return { title, img, description, ingredient };
    } catch (error) {
      console.log("Contentful error: ", error);
      throw error;
    }
  };
  return { getRecipe };
};

export default useContentfulsingle;
