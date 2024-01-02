import { BsLinkedin, BsYoutube, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <img src="hello" alt="hello" />
      <ul>
        <a
          href="https://www.youtube.com/channel/UCT_AQpqmjHN0qejWIleyHHw"
          target="_blank"
        >
          <li>
            <BsYoutube className="icon" />
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/ali-uslu-developpeur/"
          target="_blank"
        >
          <li>
            <BsLinkedin className="icon" />
          </li>
        </a>
        <a href="https://github.com/Yondemon4266" target="_blank">
          <li>
            <BsGithub className="icon" />
          </li>
        </a>
      </ul>
    </footer>
  );
}
