(function () {
    const totalFEColors = 20;
    const totalCHColors = 20; 
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
    function genColOption(category, totalColors, divId, onClickFunction, includeSeries = true, rows, imagesPerRow) {
        const colorOptionsDiv = document.getElementById(divId);
        if (!colorOptionsDiv) {
          console.error(`Element with id '${divId}' not found.`);
          return;
        }
        colorOptionsDiv.classList.add('color-options-container');
        // Clear existing content
        colorOptionsDiv.innerHTML = '';
        
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
  function onClickPATTERN1MAT(category, colorIndex) {
    changeBaseColor(seat['PATTERN1MAT'], config.baseColors.leather[category][`${category}${colorIndex}`]);
  }
  
  genColOption('ch', totalCHColors, 'section-one-ch-container', onClickPATTERN1MAT , true,4, 5); 
  genColOption('fe', totalFEColors, 'section-one-fe-container', onClickPATTERN1MAT , true, 4, 5); 
  genColOption('pg', totalPGColors, 'section-one-pg-container',onClickPATTERN1MAT,true,4,3 ); 
  genColOption('pn', totalPNColors, 'pnColorOptions5',onClickPATTERN1MAT,true,4,3); 
  genColOption('al', totalALColors, 'alColorOptions', onClickPATTERN1MAT, true, 4, 4);    
})();






