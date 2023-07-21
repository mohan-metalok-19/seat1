
// ====================================  for pg and pn colors ====================================>>>>>>>>>>>>>>>>>>
function genPgCol(leatherr, objectt, conn) {
    const colorDiv = document.createElement('div');
    colorDiv.className = 'color-div';
  
    const numRows = 3;
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
  
        if(leatherr == 'pg') {
            // Add event listener to the div element
            divElement.addEventListener('click', function() {
                changeBaseColor(seat[objectt], config.baseColors.leather.na[`na${colorNumber}`]);
            });
            imageElement.src = `./images/color/pg/pg-${colorNumber}.png`;
            pElement.textContent = `PG ${colorNumber}`;
        }  
        else {
            // Add event listener to the div element
            divElement.addEventListener('click', function() {
                changeBaseColor(seat[objectt], config.baseColors.leather.pn[`pn${colorNumber}`]);
            });
            imageElement.src = `./images/color/pn/pn-${colorNumber}.png`;
            pElement.textContent = `PN ${colorNumber}`;


        }
         
        divElement.appendChild(imageElement);
        divElement.appendChild(pElement);
        rowDiv.appendChild(divElement);
      }
    }
    let container= document.getElementById(conn);
    container.appendChild(colorDiv);
}
genPgCol('pg', 'HEADRESTMAT', 'head-pg-color-container'); 
genPgCol('pn', 'HEADRESTMAT', 'head-pn-color-container'); 

genPgCol('pg', 'WINGMAT', 'wing-pg-color-container'); 
genPgCol('pn', 'WINGMAT', 'wing-pn-color-container'); 

genPgCol('pg', 'SEATMAT', 'seat-back-pg-color-container'); 
genPgCol('pn', 'SEATMAT', 'seat-back-pn-color-container'); 


