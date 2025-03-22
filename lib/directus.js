import { createDirectus, rest, staticToken } from "@directus/sdk";

const directus = createDirectus("https://df.grainunion.kz")
  .with(staticToken("Onc_HTcxCciHhUV1IVm3812kky2DR8Yu"))
  .with(rest());

export const getDirectusData = async () => {
  try {
    const result = await directus.request(() => ({
      path: "/items/members",
      method: "GET",
    }));
    return result; // Возвращаем результат запроса
  } catch (error) {
    throw new Error(error.message); // Пробрасываем ошибку для обработки в компонентах
  }
};

export default directus;
