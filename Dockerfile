FROM denoland/deno
WORKDIR /app
COPY dist/bundle.cjs .
ENTRYPOINT ["deno", "--allow-net", "--allow-env", "--allow-read", "bundle.cjs"]