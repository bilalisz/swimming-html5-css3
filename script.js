const mediaQuery = window.matchMedia( '( min-width: 768px )' )

// Note the `matches` property
if ( mediaQuery.matches ) {
  console.log('Media Query Matched!','( min-width: 768px )')
}