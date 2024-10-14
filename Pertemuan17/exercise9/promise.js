// 1. Promise
export function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}

export async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}
