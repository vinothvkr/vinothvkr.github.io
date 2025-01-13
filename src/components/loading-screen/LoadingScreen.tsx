/* eslint-disable @next/next/no-img-element */

export default function LoadingScreen() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen w-full">
      <div className="avatar mt-14 mb-5 mx-6">
        <div className="w-28 rounded-full">
          <img
            alt=""
            src="https://avatars.githubusercontent.com/u/9390245?s=400&u=f24e22f6fea5e9b71f048e303b4d9c49c871d483&v=4"
          />
        </div>
      </div>
      <progress className="progress w-56" />
    </div>
  );
}
