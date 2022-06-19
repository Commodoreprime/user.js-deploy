#!/bin/bash

target_firefox_profile_path="$1"
[ -d "$target_firefox_profile_path" ] || {
  echo "Profile target path is requred!"
  exit 1
}

echo "Assuming user-overrides.js is in the same directory as this script..."
deploy_dir="$(dirname "$(realpath "$0")")"
overrides_path=""$deploy_dir"/user-overrides.js"

git_branch="master"
repo="arkenfox/user.js"
updater_uri="https://raw.githubusercontent.com/"$repo"/"$git_branch"/updater.sh"
prefs_cleaner_uri="https://raw.githubusercontent.com/"$repo"/"$git_branch"/prefsCleaner.sh"

updater_sh="$target_firefox_profile_path/arkenfox-updater.sh"
prefs_cleaner_sh="$target_firefox_profile_path/arkenfox-prefsCleaner.sh"

cleanup() {
  rm "$updater_sh"
  rm "$prefs_cleaner_sh"
}
trap 'cleanup' SIGINT

fail() {
  echo "A script exited with a failular ("$1")! Aborting!"
  cleanup
  exit 1
}

cd "$target_firefox_profile_path"

# Download and deploy updater.sh and prefsCleaner.sh
curl --silent "$updater_uri" --output "$updater_sh"
curl --silent "$prefs_cleaner_uri" --output "$prefs_cleaner_sh"
bash "$updater_sh" -ds -o "$overrides_path"
bash "$prefs_cleaner_sh" -s

# Copy userChrome.css to profile directory
mkdir -p "$target_firefox_profile_path/chrome"
cp "$deploy_dir/chrome/userChrome.css" "$target_firefox_profile_path/chrome"

cleanup
exit 0

