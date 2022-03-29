param(

  [Parameter(Mandatory)]
  [string]
  $workspace,

  [Parameter(Mandatory)]
  [array]
  $targets
)

Write-Verbose -Verbose:$true -Message $workspace
for ($i = 0; $i -lt $array.Count; $i++) {
  
}


foreach ($x in $targets) {
  Write-Verbose -Verbose:$true -Message $x
}
