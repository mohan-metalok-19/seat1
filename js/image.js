
(function () {
    const totalFEColors = 20;
    const totalCHColors = 20;
    // const totalWingmatColors = 20;
    // const totalBorderColors = 20;
    // const totalSeatBackrColors = 20;
    const totalStichesColors = 24;
    const totalPGColors = 10;
    const totalPNColors = 10;
    const totalALColors = 15;
    const rows = 4; 
    const imagesPerRow = 5; 
    const alNames = { 
      al1: "AL 1045",al2: "AL 1110",al3: "AL 2911",al4: "AL 2930",al5: "AL 2932",
      al6: "AL 2934",al7: "AL 2940",al8: "AL 2957",al9: "AL 2974",al10: "AL 3322",al11: "AL 4097",
      al12: "AL 4996",al13: "AL 6833",al14: "AL 7586",al15: "AL 9002",
    };

    function generateColorOptions(category, totalColors, divId, onClickFunction, includeSeries = true, rows, imagesPerRow) {
      const colorOptionsDiv = document.getElementById(divId);
      if (!colorOptionsDiv) {
        console.error(`Element with id '${divId}' not found.`);
        return;
      } 
      colorOptionsDiv.classList.add('color-options-container');
      for (let row = 0; row < rows; row++) {
        const currentRow = document.createElement('div');
        currentRow.classList.add('color-row');
        colorOptionsDiv.appendChild(currentRow);
        for (let col = 0; col < imagesPerRow; col++) {
          const colorIndex = row + col * rows + 1;
          if (colorIndex > totalColors) break;
          const div = document.createElement('div');
          div.classList.add('ch-color');
          div.onclick = function() {
            onClickFunction(category, colorIndex);
          };
          const img = document.createElement('img');
          img.src = `./images/color/${category}/${category}${includeSeries ? '-' + colorIndex : ''}.png`;
          img.alt = 'color'; 
          const p = document.createElement('p');
          if (category === 'al') {
            p.textContent = alNames[`al${colorIndex}`];
          } else {
            p.textContent = `${category.toUpperCase()} ${colorIndex}`;
          }
          div.appendChild(img);
          div.appendChild(p);
          currentRow.appendChild(div);
        }
      }
    }
 

  function onClickHEADRESTMAT(category, colorIndex) {
    changeBaseColor(seat['HEADRESTMAT'], config.baseColors.leather[category][`${category}${colorIndex}`]);
  }
  function onClickWINGMAT(category, colorIndex) {
    changeBaseColor(seat['WINGMAT'], config.baseColors.leather[category][`${category}${colorIndex}`]);
  }
  function onClickSEATMAT(category, colorIndex) {
    changeBaseColor(seat['SEATMAT'], config.baseColors.leather[category][`${category}${colorIndex}`]);
  }
  function onClickSTITCHESMAT(category, colorIndex) {
    changeBaseColor(seat['STITCHESMAT'], config.baseColors.stitches[`${category}${colorIndex}`]);  
  }
  function changePatternStitches(category, colorIndex) {
    changePatternStitchesColor(config.baseColors.stitches[`${category}${colorIndex}`]);  
  }

  generateColorOptions('st', totalStichesColors, 'body-stitches',  onClickSTITCHESMAT, true, 4, 6); 
  generateColorOptions('st', totalStichesColors, 'pattern-stitches', changePatternStitches, true, 4, 6); 
  
  generateColorOptions('ch', totalCHColors, 'head-rest-ch-container', onClickHEADRESTMAT , true, 4, 5);
  generateColorOptions('fe', totalFEColors, 'head-rest-fe-container', onClickHEADRESTMAT , true, 4, 5);
  generateColorOptions('pg', totalPGColors, 'head-rest-pg-container',onClickHEADRESTMAT,true,4,3 );
  generateColorOptions('pn', totalPNColors, 'head-rest-pn-container', onClickHEADRESTMAT,true,4,3);

  generateColorOptions('ch', totalCHColors, 'wings-ch-container', onClickWINGMAT , true, 4, 5);
  generateColorOptions('fe', totalFEColors, 'wings-fe-container', onClickWINGMAT , true,4, 5);
  generateColorOptions('pg', totalPGColors, 'wings-pg-container',onClickWINGMAT,true,4,3 );
  generateColorOptions('pn', totalPNColors, 'wings-pn-container',onClickWINGMAT,true,4,3);

  generateColorOptions('ch', totalCHColors, 'seat-back-ch-container', onClickSEATMAT , true,4, 5);
  generateColorOptions('fe', totalFEColors, 'seat-back-fe-container', onClickSEATMAT , true,4, 5);
  generateColorOptions('pg', totalPGColors, 'seat-back-pg-container',onClickSEATMAT,true,4,3 );
  generateColorOptions('pn', totalPNColors, 'seat-back-pn-container',onClickSEATMAT,true,4,3); 

})();