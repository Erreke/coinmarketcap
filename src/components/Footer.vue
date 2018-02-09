<template>
    <footer class="footer">
        <div class="container">
            <div class="content has-text-centered">
              <p>
                  <strong>Coinmarketcap clone</strong> by <a href="https://github.com/Erreke/">Yerbol Kuandykov</a>. The source code is licensed
                  <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website uses <a href="https://coinmarketcap.com/api/">Coinmarketcap Public API</a>.
              </p>
              <p>
                  <a class="button is-info" href="https://github.com/Erreke/coinmarketcap">
                      <span class="icon">
                        <i class="fab fa-github" aria-hidden="true"></i>
                      </span>
                      <span>Github</span>
                  </a>
              </p>
              <p>
                <router-link class="navbar-item" :to="{ name: 'TodoPage' }">Disclaimer</router-link>
              </p>
            </div>
        </div>
    </footer>
</template>
