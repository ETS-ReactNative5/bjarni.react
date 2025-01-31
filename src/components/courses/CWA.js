import React, { Component } from 'react';

// Components
import OpacityImage from './../common/OpacityImage';

class Cwa extends Component {
  render() { return<div className="container">
      <div className="content">

      {/* <article>
        <div className="date"> 15.04.2021</div>
        <div className="hr"><hr /></div>
        <h1>Class 24, Live Coding</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa24.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa24.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa24.zip" target="_blank">Download materials</a></p>
      </article>
      
      <article>
        <div className="date"> 08.04.2021</div>
        <div className="hr"><hr /></div>
        <h1>Class 23, Chaos</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa23.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa23.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa23.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 01.04.2021</div>
        <div className="hr"><hr /></div>
        <h1>Class 22, Microsound</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa22.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa22.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa22.zip" target="_blank">Download materials</a></p>
        <p><a href="https://vimeo.com/531454962" target="_blank">Video 1</a></p>
        <p><a href="https://vimeo.com/531455690" target="_blank">Video 2</a></p>
        <p><a href="https://vimeo.com/531456304" target="_blank">Video 3</a></p>
        <p>* access code to the videos is the same as for class</p>
      </article>

      <article>
        <div className="date"> 25.03.2021</div>
        <div className="hr"><hr /></div>
        <h1>Class 21, Assignment</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa21.pdf" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa21.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa21.pdf" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 18.03.2021</div>
        <div className="hr"><hr /></div>
        <h1>Class 19, Microtime</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa19.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa19.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa19.zip" target="_blank">Download materials</a></p>
        <p><a href="https://vimeo.com/525153671" target="_blank">Video 1</a></p>
        <p><a href="https://vimeo.com/525155474" target="_blank">Video 2</a></p>
        <p>* access code to the videos is the same as for class</p>
      </article>

      <article>
        <div className="date"> 17.02.2021</div>
        <div className="hr"><hr /></div>
        <h1>Class 18, Midi & Mapping</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa18.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa18.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa18.zip" target="_blank">Download materials</a></p>
        <p><a href="https://vimeo.com/513588673" target="_blank">Video 1</a></p>
        <p><a href="https://vimeo.com/405916671" target="_blank">Video 2</a></p>
        <p>* access code to the videos is the same as for class</p>
      </article>

      <article>
        <div className="date"> 11.02.2021</div>
        <div className="hr"><hr /></div>
        <h1>Class 17, Complexity</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa17.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa17.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa17.zip" target="_blank">Download materials</a></p>
        <p><a href="https://vimeo.com/418393696" target="_blank">Video 1</a></p>
        <p><a href="https://vimeo.com/418393885" target="_blank">Video 2</a></p>
        <p>* access code to the videos is the same as for class</p>
      </article>

      <article>
        <div className="date"> 04.02.2021</div>
        <div className="hr"><hr /></div>
        <h1>Class 16, Sonification</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa16.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa16.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa16.zip" target="_blank">Download materials</a></p>
        <p><a href="https://vimeo.com/415836563" target="_blank">Video 1</a></p>
        <p><a href="https://vimeo.com/418394047" target="_blank">Video 2</a></p>
        <p>* access code to the videos is the same as for class</p>
      </article>

      <article>
        <div className="date"> 28.01.2021</div>
        <div className="hr"><hr /></div>
        <h1>Class 15, Sound processes</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa15.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa15.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa15.zip" target="_blank">Download materials</a></p>
        <p><a href="https://vimeo.com/415828985" target="_blank">Video 1</a></p>
        <p><a href="https://vimeo.com/415828271" target="_blank">Video 2</a></p>
        <p>* access code to the videos is the same as for class</p>
      </article>

      <article>
        <div className="date"> 21.01.2021</div>
        <div className="hr"><hr /></div>
        <h1>Class 14, Composition Processes</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa14.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa14.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa14.zip" target="_blank">Download materials</a></p>
        <p><a href="https://vimeo.com/413475683" target="_blank">Video 1</a></p>
        <p><a href="https://vimeo.com/413477049" target="_blank">Video 2</a></p>
        <p>* access code to the videos is the same as for class</p>
      </article>

      <article>
        <div className="date"> 12.01.2021</div>
        <div className="hr"><hr /></div>
        <h1>Class 13, CDP 2</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa13.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa13.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa13.zip" target="_blank">Download materials</a></p>
        <p><a href="https://vimeo.com/499763340" target="_blank">Video 1</a></p>
        <p><a href="https://vimeo.com/499763790" target="_blank">Video 2</a></p>
        <p>* access code to the videos is the same as for class</p>
      </article>

      <article>
        <div className="date"> 07.01.2021</div>
        <div className="hr"><hr /></div>
        <h1>Class 12, CDP</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa12.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa12.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa12.zip" target="_blank">Download materials</a></p>
        <p><a href="https://vimeo.com/497755590" target="_blank">Video 1</a></p>
        <p><a href="https://vimeo.com/497768511" target="_blank">Video 2</a></p>
        <p>* access code to the videos is the same as for class</p>
      </article>

      <article>
        <div className="date"> 17.12.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 11, Processing</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa11.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa11.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa11.zip" target="_blank">Download materials</a></p>
        <p><a href="https://vimeo.com/405917465" target="_blank">Video 1</a></p>
        <p><a href="https://vimeo.com/405915122" target="_blank">Video 2</a></p>
        <p>* access code to the videos is the same as for class</p>
      </article>

      <article>
        <div className="date"> 10.12.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 10, Sampling</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa10.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa10.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa10.zip" target="_blank">Download materials</a></p>
        <p><a href="https://vimeo.com/405914758" target="_blank">Video 1</a></p>
        <p><a href="https://vimeo.com/405914758" target="_blank">Video 2</a></p>
        <p>* access code to the videos is the same as for class</p>
      </article>

      <article>
        <div className="date"> 03.12.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 09, Koenig</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa09.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa09.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa09.zip" target="_blank">Download materials</a></p>
        <p><a href="https://vimeo.com/486559822" target="_blank">Video 1</a></p>
        <p><a href="https://vimeo.com/486568990" target="_blank">Video 2</a></p>
        <p>* access code to the videos is the same as for class</p>
      </article>

      <article>
        <div className="date"> 26.11.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 08, Xenakis</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa08.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa08.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa08.zip" target="_blank">Download materials</a></p>
        <p><a href="https://vimeo.com/483762399" target="_blank">Video 1</a></p>
        <p><a href="https://vimeo.com/483762682" target="_blank">Video 2</a></p>
        <p>* access code to the videos is the same as for class</p>
      </article>

      <article>
        <div className="date"> 15.10.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 06, Signals</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa10.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa10.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa10.zip" target="_blank">Download materials</a></p>
      </article>

        */}

<article>
        <div className="date"> 11.02.2021</div>
        <div className="hr"><hr /></div>
        <h1>Class 23, Complexity</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa23.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa23.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa23.zip" target="_blank">Download materials</a></p>
        <p><a href="https://vimeo.com/418393696" target="_blank">Video 1</a></p>
        <p><a href="https://vimeo.com/418393885" target="_blank">Video 2</a></p>
        <p>* access code to the videos is the same as for class</p>
      </article>

      <article>
      <div className="date"> 07.04.2022</div>
      <div className="hr"><hr /></div>
      <h1>Class 22, Spectromorphology</h1>
      <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa22.zip" target="_blank">
      <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa22.png" />
      </a>
      <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa22.zip" target="_blank">Download materials</a></p>
    </article>

<article>
      <div className="date"> 31.03.2022</div>
      <div className="hr"><hr /></div>
      <h1>Class 21, CDP</h1>
      <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa21.zip" target="_blank">
      <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa21.png" />
      </a>
      <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa21.zip" target="_blank">Download materials</a></p>
    </article>

<article>
      <div className="date"> 24.03.2022</div>
      <div className="hr"><hr /></div>
      <h1>Class 20, Iannix</h1>
      <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa20.zip" target="_blank">
      <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa20.png" />
      </a>
      <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa20.zip" target="_blank">Download materials</a></p>
    </article>



<article>
      <div className="date"> 24.02.2022</div>
      <div className="hr"><hr /></div>
      <h1>Class 19, Control and Interfaces</h1>
      <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa19.zip" target="_blank">
      <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa19.png" />
      </a>
      <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa19.zip" target="_blank">Download materials</a></p>
    </article>



<article>
        <div className="date"> 17.02.2022</div>
        <div className="hr"><hr /></div>
        <h1>Class 18, Sound Processes</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa18.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa18.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa18.zip" target="_blank">Download materials</a></p>
      </article>

<article>
        <div className="date"> 10.02.2022</div>
        <div className="hr"><hr /></div>
        <h1>Class 17, Workshop 3</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa17.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa17.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa17.zip" target="_blank">Download materials</a></p>
      </article>

      

<article>
        <div className="date"> 03.02.2022</div>
        <div className="hr"><hr /></div>
        <h1>Class 16, Live Coding</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa16.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa16.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa16.zip" target="_blank">Download materials</a></p>
      </article>

<article>
        <div className="date"> 27.01.2022</div>
        <div className="hr"><hr /></div>
        <h1>Class 15, Chaos</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa15.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa15.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa15.zip" target="_blank">Download materials</a></p>
      </article>

<article>
        <div className="date"> 20.01.2022</div>
        <div className="hr"><hr /></div>
        <h1>Class 14, Microsound</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa14.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa14.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa14.zip" target="_blank">Download materials</a></p>
      </article>

    <article>
        <div className="date"> 23.12.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 13, Effects</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa13.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa13.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa13.zip" target="_blank">Download materials</a></p>
        <p><a href="https://vimeo.com/manage/videos/405917465" target="_blank">Video 1</a></p>
        <p><a href="https://vimeo.com/manage/videos/405915122" target="_blank">Video 2</a></p>
        <p>* access code to the videos is the same as for class</p>
      </article>
<article>
        <div className="date"> 16.12.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 12, Workshop 2</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa12.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa12.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa12.zip" target="_blank">Download materials</a></p>
      </article>

<article>
        <div className="date"> 09.12.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 11, Microtime</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa11.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa11.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa11.zip" target="_blank">Download materials</a></p>
      </article>

<article>
        <div className="date"> 02.12.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 10, Processing</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa10.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa10.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa10.zip" target="_blank">Download materials</a></p>
      </article>


<article>
        <div className="date"> 25.11.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 09, Signals</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa09.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa09.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa09.zip" target="_blank">Download materials</a></p>
      </article>

<article>
        <div className="date"> 19.11.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 08, Synthesis</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa08.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa08.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa08.zip" target="_blank">Download materials</a></p>
      </article>

<article>
        <div className="date"> 11.11.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 07, Koenig</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa07.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa07.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa07.zip" target="_blank">Download materials</a></p>
      </article>

<article>
        <div className="date"> 26.10.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 06, Xenakis</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa08.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa08.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa08.zip" target="_blank">Download materials</a></p>
      </article>

<article>
        <div className="date"> 07.10.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 05, History</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa05.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa05.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa05.zip" target="_blank">Download materials</a></p>
        {/* <p><a href="https://vimeo.com/481119970" target="_blank">Video 1</a></p>
        <p><a href="https://vimeo.com/481126680" target="_blank">Video 2</a></p>
        <p>* access code to the videos is the same as for class</p> */}
      </article>

<article>
            <div className="date"> 30.09.2021 </div>
            <div className="hr"><hr /></div>
            <h1>Class 04, Workshop 1</h1>
            <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa04.zip" target="_blank">
            <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa04.png" />
            </a>
            <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa04.zip" target="_blank">Download materials</a></p>
          </article>
         

<article>
            <div className="date"> 23.09.2021 </div>
            <div className="hr"><hr /></div>
            <h1>Class 03, Patterns</h1>
            <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa03.zip" target="_blank">
            <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa03.png" />
            </a>
            <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa03.zip" target="_blank">Download materials</a></p>
          </article>

<article>
            <div className="date"> 16.09.2021 </div>
            <div className="hr"><hr /></div>
            <h1>Class 02, SuperCollider</h1>
            <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa02.zip" target="_blank">
            <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa02.png" />
            </a>
            <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa02.zip" target="_blank">Download materials</a></p>
          </article>

<article>
          <div className="date"> 09.09.2021 </div>
          <div className="hr"><hr /></div>
          <h1>Class 01, Composing with Algorithms</h1>
          <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa01.zip" target="_blank">
          <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa01.png" />
          </a>
          <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/cwa01.zip" target="_blank">Download materials</a></p>
        </article>

      </div>
  </div>
  }
}

export default Cwa;
