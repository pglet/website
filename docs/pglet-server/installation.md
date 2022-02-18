---
title: Pglet Server installation
sidebar_label: Installation
slug: installation
---

Pglet Server can be run as a standalone executable or a Docker container.

## Standalone executable

Pglet Server is available for the following platforms:

* Linux: x64, ARM and ARM64
* macOS: x64 and ARM64 (Apple Silicon M1)
* Windows: x64

The latest Pglet Server executable can be downloaded from [Pglet releases](https://github.com/pglet/pglet/releases) page.

To start Pglet Server:

```
./pglet server
```

### Configuration

By default Pglet Server is listening on port 8550, but this and other server settings can be configured via environment variables or in configuration file.

### `config.yml` file

Pglet configuration file must be named `config.yml` and be in YAML format.

Configuration file location on Linux/macOS:
 * `/etc/pglet/config.yml` (system-wide)
 * `$HOME/.config/pglet/config.yml` (user-specific)
 * `./config.yml` (current directory)

Configuration file location on Windows:
 * `%ProgramData%\pglet\config.yml` (system-wide)
 * `%UserProfile%\.pglet\config.yml` (user-specific)
 * `.\config.yml` (current directory)

Minimal configuration for self-hosted Pglet Server:

```yaml
# server listening port, default is 8550
server_port: 8080

# allow connections from remote scripts/programs, default is 'false'
allow_remote_host_clients: true

# all connecting scripts/programs must present this token, default is empty
host_clients_auth_token: <token>
```

The rest of supported extra settings in the configuration file:

```yaml
# force redirecting to HTTPS protocol
force_ssl: false

# shared page lifetime since the last time it was updated, default is 1440
page_lifetime_minutes: 1440

# app page lifetime since the last time any app session was updated, default is 60
app_lifetime_minutes: 60

# ensure unath client has access to the page created from its IP
check_page_ip: false

# reserved account names, e.g. ["pglet", "admin", "administrator", "cp"]
reserved_account_names: []

# reserved page names e.g. ["public/index"]
reserved_page_names: []

# limits for unauthenticated clients, 0 - no limits
limit_pages_per_hour: 0
limit_sessions_per_hour: 0
limit_session_size_bytes: 0

# Configure redis to enable persistent pages and sessions
redis:
  # Redis IP:port
  addr:
  password:
  max_idle: 5
  max_active: 10
```

### Environment variables

* `PGLET_SERVER_PORT`: 8550
* `PGLET_FORCE_SSL`: false
* `PGLET_ALLOW_REMOTE_HOST_CLIENTS`: false
* `PGLET_PAGE_LIFETIME_MINUTES`: 1440
* `PGLET_APP_LIFETIME_MINUTES`: 60
* `PGLET_CHECK_PAGE_IP`: true
* `PGLET_RESERVED_ACCOUNT_NAMES`: account1 account2 ...
* `PGLET_RESERVED_PAGE_NAMES`: account/page account/page
* `PGLET_LIMIT_PAGES_PER_HOUR`: 0
* `PGLET_LIMIT_SESSIONS_PER_HOUR`: 0
* `PGLET_LIMIT_SESSION_SIZE_BYTES`: 0
* `PGLET_REDIS_ADDR`:
* `PGLET_REDIS_PASSWORD`:
* `PGLET_REDIS_MAX_IDLE`: 5
* `PGLET_REDIS_MAX_ACTIVE`: 10

## Docker container

Pglet Server can be run as a Docker container by using [`pglet/server`](https://hub.docker.com/r/pglet/server) image.

By default, Pglet container is listening on port 8080 and allows remote host clients. The easiest way to control Pglet settings is via environment variables.

For example, to run Pglet Server on port 80 and map it to the host:

```bash
docker run --env PGLET_SERVER_PORT=80 -p 80:80 pglet/server 
```