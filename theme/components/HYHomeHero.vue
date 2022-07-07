<template>
  <div class="home-hero-background"></div>
</template>
<style lang="scss">
.VPHome {
  position: relative;

}

.VPHero.VPHomeHero {
  .text {
    font-family: FrederickatheGreat;
    color: white;
  }

  .name {
    font-family: MountainsofChristmas;
    -webkit-text-fill-color: #8fe6d5;
  }

  .tagline {
    color: rgba($color: #fff, $alpha: 0.6);
  }
}


.home-hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://tuimao233.gitee.io/mao-blog/background.jpg) center/cover no-repeat;
}
</style>