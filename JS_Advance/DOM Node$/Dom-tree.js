/* 
<html lang="en">
<head>(\n)
    <title>Document</title>(\n)
</head>(\n)
<body>(\n)
    <h1>(\n)
        <!-- This is comment -->(\n)
        Hello World(\n)
    </h1>(\n)

    <p>Para</p>(\n)
</body>
</html>

~ In DOM Every Enter,SpaceBar,Tab this characters count as a node in Dom tree by Web Browser
  i.e something like this-->
                                    DOCUMENT
                                       |
                                      HTML
    ___________________________________|__________________________________________
    |                                  |                                         |              
  Head                             Enter(\n)                                   Body
___|____________________                     ____________________________________|_________________________                                                                        
|           |          |                     |                  |                |              |         |            
Enter     Title     Enter                   Enter              h1               Enter           p       Enter
                                                   ____________|__________                      |
                                                   |           |         |                     Para 
                                                  Enter     Comment    Hello world 

> In this tree every html element is called Element Node.
> And every node inside this HTML Element Node is called Node of an Element.

*/