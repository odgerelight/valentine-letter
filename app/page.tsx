import React from "react"

export default function Home() {
  return (
    <main>
      <div id="card">
        <center>
          <h1>Valentines Day Card</h1>
        </center>

        <div className="heart" id="heart1">
          <div id="half1">
            <div id="circle"></div>
            <div id="rec"></div>
          </div>
          <div id="half2">
            <div id="circle"></div>
            <div id="rec"></div>
          </div>
        </div>

        <div id="message" className="text-center">
          <h2>Happy Valentines Day {"<3"}</h2>
        </div>

        <div className="heart" id="heart2">
          <div id="half1">
            <div id="circle"></div>
            <div id="rec"></div>
          </div>
          <div id="half2">
            <div id="circle"></div>
            <div id="rec"></div>
          </div>
        </div>

      </div>
    </main>
  );
}
