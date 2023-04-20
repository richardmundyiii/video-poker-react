import "./GamePage.css";
import CardBack from "../../assets/images/card-library/images/backs/red.svg";

export default function GamePage({ user }) {
  return (
    <>
      <main>
        <div class="container">
          <div class="payouts">
            <div class="grid-item">
              <p>
                ROYAL FLUSH....................................................
              </p>
              <p>
                STRAIGHT FLUSH.................................................
              </p>
              <p>
                4 ACES W/ 2, 3, 4...........................................
              </p>
              <p>
                4 ACES W/ J, Q, K...........................................
              </p>
              <p>
                4 ACES ........................................................
              </p>
              <p>
                4 2s, 3s, 4s, .................................................
              </p>
              <p>
                4 5s THRU KINGS................................................
              </p>
              <p>
                FULL HOUSE.....................................................
              </p>
              <p>
                FLUSH..........................................................
              </p>
              <p>
                STRAIGHT.......................................................
              </p>
              <p>
                3 OF A KIND....................................................
              </p>
              <p>
                2 PAIR.........................................................
              </p>
              <p>
                JACKS OR BETTER................................................
              </p>
            </div>
            <div class="grid-item" id="c-1">
              <p>250</p>
              <p>50</p>
              <p>400</p>
              <p>320</p>
              <p>160</p>
              <p>160</p>
              <p>50</p>
              <p>9</p>
              <p>6</p>
              <p>4</p>
              <p>3</p>
              <p>1</p>
              <p>1</p>
            </div>
            <div class="grid-item" id="c-2">
              <p>500</p>
              <p>100</p>
              <p>800</p>
              <p>640</p>
              <p>320</p>
              <p>320</p>
              <p>100</p>
              <p>18</p>
              <p>12</p>
              <p>8</p>
              <p>6</p>
              <p>2</p>
              <p>2</p>
            </div>
            <div class="grid-item" id="c-3">
              <p>750</p>
              <p>150</p>
              <p>1200</p>
              <p>960</p>
              <p>480</p>
              <p>480</p>
              <p>150</p>
              <p>27</p>
              <p>18</p>
              <p>12</p>
              <p>9</p>
              <p>3</p>
              <p>3</p>
            </div>
            <div class="grid-item" id="c-4">
              <p>1000</p>
              <p>200</p>
              <p>1600</p>
              <p>1280</p>
              <p>640</p>
              <p>640</p>
              <p>200</p>
              <p>36</p>
              <p>24</p>
              <p>16</p>
              <p>12</p>
              <p>4</p>
              <p>4</p>
            </div>
            <div class="grid-item" id="c-5">
              <p>4000</p>
              <p>250</p>
              <p>2000</p>
              <p>1600</p>
              <p>800</p>
              <p>800</p>
              <p>250</p>
              <p>45</p>
              <p>30</p>
              <p>20</p>
              <p>15</p>
              <p>5</p>
              <p>5</p>
            </div>
          </div>
          <div class="game">
            <div id="winning-hand-message"></div>
            <div class="hold-row">
              <p id="card-1">HOLD</p>
              <p id="card-2">HOLD</p>
              <p id="card-3">HOLD</p>
              <p id="card-4">HOLD</p>
              <p id="card-5">HOLD</p>
            </div>
            <div class="cards-row" id="card-row">
              <img src={CardBack} id="card-back" alt="1" />
              <img src={CardBack} id="card-back" alt="2" />
              <img src={CardBack} id="card-back" alt="3" />
              <img src={CardBack} id="card-back" alt="4" />
              <img src={CardBack} id="card-back" alt="5" />
            </div>
            <div class="payout-line">
              <p id="pay-message"></p>
              <p id="bet-message"></p>
              <p id="credit-message"></p>
            </div>
            <div class="button-row">
              <button id="helpBtn">HELP</button>
              <div id="help-modal" class="modal">
                <div class="modal-content">
                  <span id="close">&times;</span>
                  <h2>How To Play</h2>
                  <ol>
                    <li>
                      Upon loading the game, all the cards will be face down
                    </li>
                    <li>
                      Select between 1 and 5 credits with either the
                      <b>"BET ONE</b> button or <b>"MAX BET"</b> button.
                    </li>
                    <li>
                      Then click the <b>DEAL</b> to shuffle the deck and get the
                      first 5 cards.
                    </li>
                    <li>
                      Click on the cards you wish to keep and when you're ready
                      click the <b>DEAL</b> button again to replace the
                      discarded cards
                    </li>
                    <li>
                      If you have a winning hand, you will see on the bottom
                      left of the screen your winnings. You will also see your
                      total credits increase.
                    </li>
                  </ol>
                  <p>
                    <b>NOTE:</b> Currently, all hold signs will remain lit after
                    you have redelt your cards. Once you click any card all
                    previous card holds will turn off. If you choose not to keep
                    any cards do not worry, as the hold signs are only visual
                    and all 5 cards will be replaced.
                  </p>
                </div>
              </div>
              <button id="betBtn">BET ONE</button>
              <button id="serviceBtn">SERVICE</button>
              <div id="service-modal">
                <div id="modal-content">
                  <div id="hand-table">
                    <span id="close-service">&times;</span>
                    <h2 id="service-title">Service Admin Portal</h2>
                  </div>
                  <div id="sec-2">Discuss What Hand They Went For</div>
                  <div id="sec-3">Overall Analyist</div>
                </div>
              </div>
              <button id="betBtnMax">MAX BET</button>
              <button id="dealBtn">DEAL</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
