var FITS = astro.FITS;

  // Define a callback function for when the FITS file is received
  var callback = function() {

    // Get the first header-dataunit containing a dataunit
    var hdu = this.getHDU();

    // Get the first header
    var header = this.getHeader();

    // or we can do
    var header = hdu.header;

    // Read a card from the header
    
    // var bitpix = header.get('BITPIX');

    // Get the dataunit object
    var dataunit = hdu.data;

    // or we can do
    var dataunit = this.getDataUnit();

    // Do some wicked client side processing ...

    console.log(hdu);
}

  // Set path to FITS file
  var url = "Users/hdewey/Desktop/kepler/10619192.fits";

  // Initialize a new FITS File object
  var fits = new FITS(url, callback);

  // Alternatively, the FITS object may be initialized using the HTML File API.
  var fits = new FITS.File(fileObj, callback);