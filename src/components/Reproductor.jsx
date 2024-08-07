import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

export const Reproductor = () => {
    const tracks = [
        {
            url: "mp3/This Will Be (An Everlasting Love).mp3",
            title: "This Will Be (An Everlasting Love)",
            tags: ["Story", "Love"],
          },
        {
          url: "mp3/New West - Those Eyes.mp3",
          title: "New West - Those Eyes",
          tags: ["Story", "Love"],
        },
        {
          url: "mp3/James Arthur - A Thousand Years.mp3",
          title: "James Arthur - A Thousand Years",
          tags: ["Story", "Love"],
        }
      ];
    //   colors:{
    //     'fondo': '#F9F6ED',
    //     'rojo':'#C14F4D',
    //     'verde':'#AABE99',
    //     'naranja':'#EB882A'
    //   }

      const colors = {
        tagsBackground: "#C14F4D",
        tagsText: "#F9F6ED ",
        tagsBackgroundHoverActive: "#6e65f1",
        tagsTextHoverActive: "#F9F6ED ",
        searchBackground: "#AABE99",
        searchText: "#F9F6ED ",
        searchPlaceHolder: "#575a77",
        playerBackground: "#AABE99",
        titleColor: "#F9F6ED ",
        timeColor: "#F9F6ED ",
        progressSlider: "#C14F4D",
        progressUsed: "#F9F6ED ",
        progressLeft: "#151616",
        bufferLoaded: "#1f212b",
        volumeSlider: "#C14F4D",
        volumeUsed: "#F9F6ED ",
        volumeLeft: "#151616",
        playlistBackground: "#AABE99",
        playlistText: "#575a77",
        playlistBackgroundHoverActive: "#AABE99",
        playlistTextHoverActive: "#F9F6ED ",
      };
  return (
    <div className="reproductor">
        <img className="my-10" src="./images/carteles/ponePlay.svg" alt="" />
        <Player trackList={tracks} 
         includeTags={false}
         includeSearch={false}
         showPlaylist={false}
         sortTracks={false}
         autoPlayNextTrack={true}
         customColorScheme={colors}
        />
    </div>

  )
}
