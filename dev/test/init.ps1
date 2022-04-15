New-Item -ItemType:Directory -Force '.\node_modules\@types'
Copy-Item -Recurse '.\node_modules\nox\code\types' '.\node_modules\@types'
