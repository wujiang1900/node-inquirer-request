
import assert from 'assert';

import {getCities} from '../src/index.js';

describe('US States and Cities', () => {
  	  const states = [{
	      "id" : 1,
	      "country" : "USA",
	      "name" : "Alabama",
	      "abbr" : "AL",
	      "area" : "135767SKM",
	      "largest_city" : "Birmingham",
	      "capital" : "Montgomery"
	    }, {
	      "id" : 2,
	      "country" : "USA",
	      "name" : "Alaska",
	      "abbr" : "AK",
	      "area" : "1723337SKM",
	      "largest_city" : "Anchorage",
	      "capital" : "Juneau"
	    }, {
	      "id" : 3,
	      "country" : "USA",
	      "name" : "Arizona",
	      "abbr" : "AZ",
	      "area" : "113594SKM",
	      "largest_city" : "Phoenix",
	      "capital" : "Phoenix"
	    }]

  it('should return largest city and capital given valid state name', () => {
	    const name = 'Arizona'
	    const {largest_city: largest_city, capital: capital} = getCities(states, name)
      assert.equal(largest_city, "Phoenix")
      assert.equal(capital, "Phoenix")
  });

  it('should return largest city and capital given valid state abbreviation', () => {
	    const name = 'AZ'
	    const {largest_city: largest_city, capital: capital} = getCities(states, name)
      assert.equal(largest_city, "Phoenix")
      assert.equal(capital, "Phoenix")
  });

  it('should return largest city and capital given valid state abbreviation', () => {
	    const name = 'AZ'
	    const {largest_city: largest_city, capital: capital} = getCities(states, name)
      assert.equal(largest_city, "Phoenix")
      assert.equal(capital, "Phoenix")
  });

  it('should return undefined largest city and capital given invalid state name', () => {
	    const name = 'AM'
	    const {largest_city: largest_city, capital: capital} = getCities(states, name)
      assert.equal(largest_city, undefined)
      assert.equal(capital, undefined)
  });

  it('should return error given state name containing invalid characters', () => {
	    const name = 'A*'
	    const error = getCities(states, name)
      assert.equal(error, "Invalid state name or abbreviation!")
  });

  it('should return error given state name of less than 2 characters', () => {
	    const name = 'A'
	    const error = getCities(states, name)
      assert.equal(error, "Invalid state name or abbreviation!")
  });

  it('should return error given state name of more than 13 characters', () => {
	    const name = 'AAAAAAAAAAAAAA'
	    const error = getCities(states, name)
      assert.equal(error, "Invalid state name or abbreviation!")
  });

  it('should return error given wrong formatted state name', () => {
	    const name = 'AZ BE MA'
	    const error = getCities(states, name)
      assert.equal(error, "Invalid state name or abbreviation!")
  });

});
