import React from 'react';
import Typical from 'react-typical';
import './Home.css';
import IconBackground from './SvgBackground';

function Home() {
    return (
        <>
    <div className="container">
          <div className="control-text1">
                <h1 className="heading-style"><span className="blast">H</span>
                <span className="blast">i</span>
                <span className="blast">,</span>
                <br/>
                <span className="blast">I</span>
                <span className="blast">'</span><span className="blast">m</span> <span className="blast-main">N</span><span className="blast">i</span><span className="blast">k</span><span className="blast">a</span>
                <span className="blast">l</span><span className="blast">a</span> <span className="blast-main">M</span><span className="blast">i</span><span className="blast">k</span><span className="blast">e</span>
                <span className="blast">l</span><span className="blast">a</span><span className="blast">d</span><span className="blast">z</span><span className="blast">e</span></h1>
                  <p className="paragrap1">
                      <span>I</span>
                    <Typical 
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        ` Love Coding.`,
                        2200,
                        `'m Developer.`,
                        1000,
                        `'m Creative.`,
                        1000,
                        `'m Designer.`,
                        1000,
                        `'m Hard-Working.`,
                        1000,
                        `'m Junior.`,
                        1000,
                        `'m me.`,
                        1000,
                        `'m Diligent.`,
                        1000,
                        `'m Student`,
                        1000
                    ]}
                    />
                  </p>
                    <div>
                      <button className="button-style-homepage">CONTACT ME</button>
                    </div>
            </div>
            <aside className="flex-content">
                <div className="background-position">
                  <IconBackground />
                </div>
            </aside>

      </div>
        </>
    );
}

export default Home;


