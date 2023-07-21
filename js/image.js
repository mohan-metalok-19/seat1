function genCol(leather, object, con) {
    const colorDiv = document.createElement('div');
    colorDiv.className = 'color-div';
  
    const numRows = 5;
    const imagesPerRow = 4;
  
    for (let row = 1; row <= numRows; row++) {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'color-1 para-text';
      colorDiv.appendChild(rowDiv);
  
      for (let i = 1; i <= imagesPerRow; i++) {
        const colorNumber = (row - 1) * imagesPerRow + i;
        const divElement = document.createElement('div');
        divElement.className = 'ch-color';
        const imageElement = document.createElement('img');
        imageElement.alt = 'color';
        const pElement = document.createElement('p');
  
        if(leather == 'ch') {
            // Add event listener to the div element
            divElement.addEventListener('click', function() {
                changeBaseColor(seat[object], config.baseColors.leather.ch[`ch${colorNumber}`]);
            });
            imageElement.src = `./images/color/ch/ch-${colorNumber}.png`;
            pElement.textContent = `CH ${colorNumber}`;
        } 
        else{
            // Add event listener to the div element
            divElement.addEventListener('click', function() {
                changeBaseColor(seat[object], config.baseColors.leather.fe[`fe${colorNumber}`]);
            });
            imageElement.src = `./images/color/fe/fe-${colorNumber}.png`;
            pElement.textContent = `FE ${colorNumber}`;
        }  

        divElement.appendChild(imageElement);
        divElement.appendChild(pElement);
        rowDiv.appendChild(divElement);
      }
    }
    let container= document.getElementById(con);
    container.appendChild(colorDiv);
}
genCol('ch', 'HEADRESTMAT', 'ch-color-container');
genCol('fe', 'HEADRESTMAT', 'fe-color-container'); 

genCol('ch', "WINGMAT", 'wings-ch-color-container');
genCol('fe', "WINGMAT", 'wings-fe-color-container');

genCol('ch', "SEATMAT", 'seat-back-ch-color-container');
genCol('fe', "SEATMAT", 'seat-back-fe-color-container');

genCol('ch', "PATTERN1MAT", 'pattern-one-ch-color-container');
genCol('fe', "PATTERN1MAT", 'pattern-one-fe-color-container');

