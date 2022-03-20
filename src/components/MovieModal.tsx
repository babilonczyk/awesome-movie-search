import React from "react";
import thumbnail from '../assets/images/thumbnail.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function MovieModal(props: { setIsOpen: Function }) {
  return (
    <div className="modal">
      <div className="modal-outer-layer" onClick={() => props.setIsOpen(false)}></div>
      
      <div className="modal-content">

        <div className="modal-content-top">
          <img className="modal-content-img" src={thumbnail} alt="thumbnail" />
          <Tabs>
            <TabList>
              <Tab><h5>Description</h5></Tab>
              <Tab><h5>Cast</h5></Tab>
            </TabList>
            <TabPanel>
              <div className="modal-content-description">
                <p>
                  1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="modal-content-actors">
                <ul>
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                  <li>item 4</li>
                  <li>item 5</li>
                  <li>item 6</li>
                  <li>item 7</li>
                  <li>item 8</li>
                  <li>item 9</li>
                  <li>item 10</li>
                  <li>item 11</li>
                  <li>item 12</li>
                  <li>item 13</li>
                  <li>item 14</li>
                  <li>item 15</li>
                  <li>item 16</li>
                  <li>item 17</li>
                  <li>item 18 </li>
                  <li>item 19</li>
                  <li>item 20</li>
                  <li>item 21</li>
                </ul>              
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <div className="modal-content-bottom">
             
        </div>
        <div className="select-stars">
          <span>I give this movie</span>
          <select name="cars" id="cars">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <span>stars.</span>
          <button onClick={() => {}}>SUBMIT</button>
        </div>
        <button onClick={() => props.setIsOpen(false)}>EXIT</button>
      </div>
    </div>
  );
};

export default MovieModal;   