// ==UserScript==
    yScroll = window.innerHeight + window.scrollMaxY;
		objLightbox.childNodes[0].href = objLink.href;
		
		var dwidth = imgPreload.width;
		var dheight = imgPreload.height;
        if (arrayPageSize[2] < arrayPageSize[3]) {
            dwidth = Math.min(arrayPageSize[2]-50, dwidth);
            dheight = (dwidth/imgPreload.width)*dheight;
        }
        else {
            dheight = Math.min(arrayPageSize[3]-50, dheight);
            dwidth = (dheight/imgPreload.height)*dwidth;
        }
        
        objImage.width = dwidth;
        objImage.height = dheight;
        
		// center lightbox
		var dtop = arrayPageScroll[1] + ((arrayPageSize[3] - 25 - dheight) / 2);
		var dleft = ((arrayPageSize[0] - 40 - dwidth) / 2);
		dtop = Math.max(dtop, arrayPageScroll[1]);
		dleft = Math.max(dleft, 0);
		objLightbox.style.top = dtop + 'px';
        objLightbox.style.left = dleft + 'px';
	
		if ( anchor.hasAttribute("href") ) {
		    if ( anchor.getAttribute("rel") == "lightbox" ) break;

                    if (event.metaKey || event.shiftKey ||
                        event.altKey || event.ctrlKey) return true;
                    showLightbox(this);
                    event.stopPropagation();
                    event.preventDefault();
                    return false;
                }, true);
        }
    
	
	imgPreloader.src = loadingImage;
            hideLightbox();
            if (event.metaKey || event.shiftKey ||
                event.altKey || event.ctrlKey) return true;
            event.stopPropagation(); event.preventDefault();
            return false;
        }, true);
        hideLightbox();
        if (event.metaKey || event.shiftKey ||
            event.altKey || event.ctrlKey) return true;
        event.stopPropagation(); event.preventDefault(); return false;}, true);
