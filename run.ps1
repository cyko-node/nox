param(
  [Parameter()]
  [string]
  $tester = "dev\test",

  [Parameter()]
  [string]
  $script = $null,

  [Parameter()]
  [switch]
  $self = $false,

  [Parameter()]
  [switch]
  $test = $false
)

$work = $(Get-Location)

function msg { Write-Host -Object $args }
function eol { Write-Host -NoNewline:$false }
function run {
  param (
    [Parameter(Mandatory)]
    [string]
    $location
  )
  
  if (!(Set-Location $location)) {
    msg "# <${script}> @ $(Get-Location)"
    if ($script -eq "install") {
      npm install
    } else {
      npm run $script
    }
    Set-Location $work ; eol
  }
}

if (!$self -and !$test) {
  run -location $work
  run -location $tester
} else {
  if ($self) { run -location $work }
  if ($test) { run -location $tester }
}
