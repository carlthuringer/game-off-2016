import Html exposing (Html, beginnerProgram, text)

type Msg = NoOp

main : Program Never String String
main = Html.beginnerProgram
  { model = ""
  , view = (\model -> text "hello test hot4")
  , update = (\model msg -> model)  
  }

