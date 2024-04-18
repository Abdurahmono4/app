function About() {
  return (
    <div>
      <h1>About</h1>
      <div className="cards">
        <div className="item">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/030/514/559/small_2x/beautiful-woman-stand-near-the-window-and-read-a-book-ai-generated-photo.jpg"
            alt=""
          />
          <p className="item__info">
            Here’s a fascinating fact about books: The Guinness Book of World
            Records named the Bible as the best-selling book of all time, with
            over 5-7 billion copies sold.
          </p>
        </div>{" "}
        <div className="item">
          <img
            src="https://img.freepik.com/free-photo/green-book-with-dry-flowers-pink-warm-knitted-sweater_343596-5080.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709942400&semt=ais"
            alt=""
          />
          <p className="item__info">
            Books have been an integral part of human culture and knowledge for
            millennia, and their evolution is as fascinating as the stories they
            contain.
          </p>
        </div>{" "}
        <div className="item">
          <img
            src="https://i.pinimg.com/736x/a1/a6/b5/a1a6b5db8d0ae6b6e1e8da86ef92288d.jpg"
            alt=""
          />
          <p className="item__info">
            Additionally, many scholars consider “The Tale of Genji,” written by
            Japanese courtier Murasaki Shikibu before 1021 CE, as the first
            novel ever.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
