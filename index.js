class PentiumPc {
  constructor(brand, series, price, color, processor) {
    this.brand = brand || "unknown"
    this.series = series || "unknown"
    this.price = price || 0
    this.hdd = 120 //in GB
    this.clock = 1.50 //in GHz
  }

  increment(clockSpeed) {
    this.clock = this.clock + clockSpeed
  }

  setPrice(newPrice) {
    this.price = newPrice
  }

  upgrade(newHdd) {
    this.hdd = newHdd
  }
}

/*
class: Ultrabook
ssd:
camera:
*/

class Ultrabook extends PentiumPc {
  constructor(
    brand,
    series,
    price,
    hdd,
    clock,
    owner,
    ssd,
    camera
  ) {
    super(brand, series, price, hdd, clock, ssd, camera)
    this.owner = owner || "unknown"
    this.ssd = ssd || 128
    this.camera = 1
  }

  upgradeSsd(newSsd) {
    this.ssd = newSsd
  }

}

class GamingLaptop extends Ultrabook {
  constructor(
    brand,
    series,
    price,
    hdd,
    clock,
    owner,
    ssd,
    camera,
    vga,
    gameslist
  ) {
    super(
      brand,
      series,
      price,
      hdd,
      clock,
      owner,
      ssd,
      camera
    )
    this.vga = vga || 1060 //NVidia
    this.gameslist = gameslist || []
  }

  setVga(newVga) {
    this.vga = newVga
  }

  showGamesList() {
    const currentGames = this.gameslist
    let text = "Games List ... "

    currentGames.map((game) => {
      text += `${game},`
    })
    return text
  }
}

module.exports = {
  PentiumPc,
  Ultrabook,
  GamingLaptop
}