import useSound from "use-sound";
import soundFile from "../../public/sounds/ringtone.mp3"; 

const Ringtone = () => {
    const [play] = useSound(soundFile);
  
    const handleClick = () => {
      play();
    };
  
    return (
      <div>
        <button onClick={handleClick}>Reproducir sonido</button>
      </div>
    );
};


export default Ringtone;
