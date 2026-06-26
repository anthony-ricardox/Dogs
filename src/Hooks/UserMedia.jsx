import React from "react";

const UserMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function ChangeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    ChangeMatch()
    window.addEventListener("resize", ChangeMatch);
    return () => {
      window.removeEventListener("resize", ChangeMatch);
    };
  }, [media]);
  return match;
};

export default UserMedia;
