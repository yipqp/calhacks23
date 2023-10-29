interface DiaryEntryProps {
  photoURL: string;
  title: string;
  rating: number;
  caption: string;
}

const DiaryEntry = ({ photoURL, title, rating, caption }: DiaryEntryProps) => {
  return (
    <div className="bg-white flex flex-col md:flex-row rounded-lg border-2 border-black p-6 px shadow-[10px_10px_0px_0px_#0a0a0a]">
      <img
        src={photoURL}
        alt=""
        className=" aspect-square object-cover flex-1 h-96 justify-items-center"
      />
      <div className="flex flex-col flex-1 gap-6 p-10">
        <h2 className="font-bold">{title}</h2>
        <div className="">{rating} / 5</div>
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default DiaryEntry;
