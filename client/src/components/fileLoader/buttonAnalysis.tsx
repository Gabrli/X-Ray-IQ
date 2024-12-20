export default function ButtonAnalysic(props: {
  isReady: boolean;
  fun: () => void;
}) {
  const { isReady, fun } = props;

  return (
    <button
      onClick={() => fun()}
      className={`${
        isReady
          ? "bg-primary text-white hover:bg-secondary"
          : "bg-gray-700 text-gray-500 cursor-not-allowed"
      } transition duration-500 ease-in-out pl-28 pr-28 pt-3 pb-3   font-medium rounded-lg `}
    >
      Start Analysis
    </button>
  );
}
