import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="div1">
          <nav class="navbar navbar-expand-lg py-lg-2 sticky-top navstyle">
            {/*  Brand/logo  */}
            <a class="navbar-brand " className="a1" href="#">
              <img
                src="assets/LogoMee.png"
                width="40"
                height="40"
                alt="smiley"
              />
            </a>
            <span className="span1">SOLANA MEES</span>
            {/* <!-- Links --></nav> */}
            <ul class="navbar-nav" className="ulist">
              <li class="nav-item">
                <a class="nav-link" href="https://">
                  <b>Home</b>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://">
                  <b>My SolMees</b>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link marketplace" href="https://">
                  <b>Marketplace</b>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  target="_blank"
                  href="https://discord.com/invite/hHQEFqnxSF"
                >
                  <b>Discord</b>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  target="_blank"
                  href="https://twitter.com/SolanaMees"
                >
                  <b>Twitter</b>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  target="_blank"
                  href="https://t.me/SolanaMees"
                >
                  <b>Telegram</b>
                </a>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item-connect">
                <Link class="nav-link" to="/connect">
                  <b>Connect</b>
                </Link>
              </li>

              <li class="nav-item-sett">
                <button class="nav-link" href="#">
                  <i class="far fa-cog"></i>
                </button>
              </li>
            </ul>
          </nav>
          <br />

          <div class="container-fluid">
            <ul>
              <li>
                <span>
                  <img
                    src="assets/charac.png"
                    width="40"
                    height="40"
                    alt="smiley"
                  />
                </span>
                <h3>
                  <b>Characters</b>
                </h3>
                <p>
                  20,000 3D voxel characters, where each one <br />
                  can be minted as an NFT on the Solana
                  <br />
                  Blockchain. When minting a SolMee, you <br />
                  are also registered on the blockchain as its
                  <br />
                  creator, making you eligible to receive fees <br />
                  for any future trades of that NFT.
                </p>
              </li>
              <hr />
              <li>
                <span>
                  <img
                    src="assets/metaplex.png"
                    width="40"
                    height="40"
                    alt="metaplex"
                  />
                </span>
                <h3>
                  <b>Metaplex</b>
                </h3>
                <p>
                  Each SolMee is minted using the Metaplex <br />
                  contract, a Solana NFT standard. Each <br />
                  Metaplex NFT is part of a wider Solana <br />
                  ecosystem and is tradeable on Metaplex-
                  <br />
                  based marketplaces.
                </p>
              </li>
              <hr />
              <li>
                <span>
                  <img
                    src="assets/equ.png"
                    width="40"
                    height="40"
                    alt="metaplex"
                  />
                </span>
                <h3>
                  <b>Equal Chances</b>
                </h3>
                <p>
                  When minting a Solana Mee on the <br />
                  blockchain, a random one will be created. <br />
                  This gives everyone a fair chance at <br />
                  obtaining any currently unminted Solana
                  <br />
                  Mee. The ones already created can be <br />
                  traded on our marketplace.
                </p>
              </li>
              <hr />
              <li>
                <span>
                  <img
                    src="assets/payless.png"
                    width="40"
                    height="40"
                    alt="metaplex"
                  />
                </span>
                <h3>
                  <b>
                    Pay less for getting in
                    <br /> early!
                  </b>
                </h3>
                <p>
                  The mint price will be starting at 2 SOL.
                  <br />
                  However, after every 2500 minted SolMees,
                  <br />
                  the price will go up by an additional 0.5 SOL.
                  <br />
                  Be among the first to get the best deal for
                  <br />
                  you SolMee!
                </p>
              </li>
            </ul>
          </div>
          <button id="btn">
            <b>Own a Solana Mee Now!</b>
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
