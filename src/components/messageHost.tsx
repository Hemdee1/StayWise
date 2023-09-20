const MessageHost = () => {
  return (
    <div className="w-full rounded-3xl px-9 items-center h-[170px] border border-borderColor flex justify-between mt-7">
      <div className="flex items-center gap-7">
        <UserIcon />
        <div>
          <h3 className="text-2xl font-bold">Meet the host</h3>
          <p className="text-xl font-medium">
            Send a question to the property to find out more
          </p>
        </div>
      </div>
      <button className="w-[300px] !py-3 rounded-lg border-2 border-secondary font-bold">
        Message host
      </button>
    </div>
  );
};

const UserIcon = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="36" cy="36" r="36" fill="#FFF9ED" />
    <g clipPath="url(#clip0_82_16)">
      <path
        d="M36 36C33.8783 36 31.8434 35.1571 30.3431 33.6569C28.8429 32.1566 28 30.1217 28 28C28 25.8783 28.8429 23.8434 30.3431 22.3431C31.8434 20.8429 33.8783 20 36 20C38.1217 20 40.1566 20.8429 41.6569 22.3431C43.1571 23.8434 44 25.8783 44 28C44 30.1217 43.1571 32.1566 41.6569 33.6569C40.1566 35.1571 38.1217 36 36 36ZM35.0688 42.45L33.9062 40.5125C33.5062 39.8438 33.9875 39 34.7625 39H37.2312C38.0062 39 38.4875 39.85 38.0875 40.5125L36.925 42.45L39.0125 50.1938L41.2625 41.0125C41.3875 40.5063 41.875 40.175 42.3813 40.3062C46.7625 41.4062 50 45.3687 50 50.0812C50 51.1437 49.1375 52 48.0812 52H39.8438C39.7125 52 39.5938 51.975 39.4813 51.9312L39.5 52H32.5L32.5188 51.9312C32.4063 51.975 32.2812 52 32.1562 52H23.9188C22.8625 52 22 51.1375 22 50.0812C22 45.3625 25.2438 41.4 29.6188 40.3062C30.125 40.1812 30.6125 40.5125 30.7375 41.0125L32.9875 50.1938L35.075 42.45H35.0688Z"
        fill="#FEB737"
      />
    </g>
    <defs>
      <clipPath id="clip0_82_16">
        <rect
          width="28"
          height="32"
          fill="white"
          transform="translate(22 20)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default MessageHost;
