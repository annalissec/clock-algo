import { Page } from "./Page"

export class Cache {
	constructor(cacheSize){
		this.cacheSize = parseInt(cacheSize)
		this.cache = []
		this.pageStream = []
		this.clockHand = 0
		this.cacheMessage = ''
		this.pushList(parseInt(cacheSize))
	}

	pushList(cacheSize){
		for (var i = 0; i < cacheSize; i++) {
			this.cache.push(new Page(-1))
		}
	}
	
	pageCall(page) {
		page = parseInt(page)

		this.pageStream.push(page)

		if (this.checkExists(page)) {
			this.cacheMessage = 'Hit'
			this.cache[this.getIndex(page)].useBit = 1
		}
		else {
			if (this.cache[this.clockHand].pageNum !== -1) {
				while (this.cache[this.clockHand].useBit === 1) {
					this.cache[this.clockHand].useBit = 0
					this.updateClockHand()
				}
				this.cacheMessage = "Capacity Miss"
				this.cache[this.clockHand] = new Page(page)
				this.updateClockHand()
			}
			else if (this.cache[this.clockHand].pageNum === -1) {
				this.cacheMessage = 'Compulsory Miss'
				this.cache[this.clockHand] = new Page(page)
				this.updateClockHand()
			}
		}
	}

	checkExists(page) {
		for (var x in this.cache) {
			if (this.cache[x].pageNum === page) {
				return true
			}
		}
		return false
	}

	updateClockHand() {
		if (this.clockHand === this.cacheSize - 1) {
			this.clockHand = 0
		} else {
			this.clockHand += 1
		}
	}

	getIndex(page) {
		for (var x in this.cache) {
			if (this.cache[x].pageNum === page) {
				return x
			}
		}
	}

	static clear(){
		this.cache = []
		this.pageStream = []
		this.clockHand = 0
		this.cacheMessage = ''
	}
}