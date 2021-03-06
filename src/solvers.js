/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  //debugger;
  
  var solution = [];
    
  var board = new Board({n: n});
    
  var findSolution = function(currBoard, piecesToggled, row) {
    // Base case
    if (piecesToggled === n) {
      // return array solution (the first one you find)
      solution = currBoard.rows();
      return;
    }
    // Iterate through board starting at [0,0]
    // for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      // Toggle piece at first location
      currBoard.togglePiece(row, j);
      piecesToggled++;
      if (currBoard.hasAnyRooksConflicts()) {
        currBoard.togglePiece(row, j);
        piecesToggled--;
      }
    }
    findSolution(currBoard, piecesToggled, row + 1);        
  }

  findSolution(board, 0, 0); 

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  debugger;
  var solutionCount = 0;
  var board = new Board({n: n});
  
  
  var findSolutions = function(row) {
    // base case again is number of rows  = n
    if (row === n) {
      // Increment solutions counter
      solutionCount++;
      return;
    }
    
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyRooksConflicts()) {
        findSolutions(row + 1);
      }
      board.togglePiece(row, i);
    }
  };

  findSolutions(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
