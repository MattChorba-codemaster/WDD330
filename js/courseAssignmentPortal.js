var d = new Date();
document.getElementById("year").innerHTML = '&copy;' + d.getFullYear() + '&#124; Matthew Anthony Chorba &#124; Ohio &#124; <a id="byuiLink" href="https://www.byui.edu/online">BYUI Online Learning</a>';

let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = "Last Updated: " + oLastModif;