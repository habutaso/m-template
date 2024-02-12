pnpm run storybook -- --port 6006 --host 0.0.0.0 &
pnpm run dev -- -H '0.0.0.0' -p 3333 &

wait -n

exit $?
