import React from "react";
import "./App.css";

import Feed from "./typedComponents/Feed";

/**
 * 1. <variable-name>: type = assignment
 *    - Take exmaple of on object name "title"
 * 2. Exmaple of object in TS
 *    - Take exmaple of an object with "title" and "description" as keys.
 * 3. Create a non-typed component with props
 *    - Add console log to show that props is a type of object
 *    - (it won't complaint for props :( )
 * 4. Create a typed component with props (it would complaint for props :) )
 * 5. Try to add extra props from App.tsx
 *    - Add likes prop
 * 6. Add extra props in Feed.tsx
 *    - Add author as an extra prop
 * 7. Introduce Union (|)
 *    - Add ageGroup prop with only type as "teen" | "all"
 * 8. Introduce optionals in TS
 *    - Add comment as an optional prop
 *    - Make this comment as an array[*Imp*]
 *    - Add another feed
 * 9. Introduce interfaces
 *    - Extract out complete TS interface from Feed "props"
 *    - Name the file as FeedProps and tell the reason of why it has ".ts" as extension
 *    - Name the interface as FeedProp
 *    - Show Ctrl hover
 */

function App() {
  return (
    <div className="App">
      <Feed
        title={"My Feed"}
        description={"sample description"}
        likes={2}
        author={"Bhavin Agarwal"}
        ageGroup={"all"}
        comment={"This is a comment"}
      />
      <Feed
        title={"My Feed 2"}
        description={"sample description"}
        likes={2}
        author={"Bhavin Agarwal"}
        ageGroup={"teen"}
      />
    </div>
  );
}

export default App;
