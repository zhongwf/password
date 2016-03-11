/*
 * JavaScript MD5 Demo JS
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*global document, md5 */

;(function () {
  'use strict'

  var input = document.getElementById('input')
  document.getElementById('calculate').addEventListener(
    'click',
    function (event) {
      event.preventDefault()
	  var str = md5(input.value);
      document.getElementById('result').value = str.substr(0,8) + str.substr(8,8).toLocaleUpperCase() + "@";
	  document.getElementById('numberResult').value = str.replace(/[^\d]/g,'').substr(0,6);
	
	  
    }
  )
  input.value = '域名#实际密码'
}())



function showSixNumber(){
	
	document.getElementById("sixNumber").style.visibility="visible";
	document.getElementById("sixNumber").style.display="block";
	
	
}