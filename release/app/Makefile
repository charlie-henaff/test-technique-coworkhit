CURRENT_UID         	= $(shell id -u)
CURRENT_GID         	= $(shell id -g)
CURRENT_PATH        	= $(shell pwd)

NODE_IMG            	= node:lts-alpine
NODE_PORTS          	= 3000:3000
NODE_WORKSPACE			= /usr/src 

DOCKER_OPT_USER     	= -u $(CURRENT_UID):$(CURRENT_GID)
DOCKER_OPT_VOLUMES  	= -v $(CURRENT_PATH):$(NODE_WORKSPACE) 
DOCKER_OPT_WORKSPACE	= -w $(NODE_WORKSPACE) 
DOCKER_OPT_PORTS		= -p $(NODE_PORTS)

DOCKER_RUN 				= docker run -it --rm $(DOCKER_OPT_USER)
DOCKER_RUN_NODE     	= $(DOCKER_RUN) $(DOCKER_OPT_WORKSPACE) $(DOCKER_OPT_VOLUMES) $(DOCKER_OPT_PORTS) $(NODE_IMG)

.DEFAULT_GOAL :=    	help
.PHONY:             	help

help:
	@grep -Eh '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'


##
##Commands 
##-----------------------------------------------------------------------------
.PHONY: node yarn

node: ## args: c="[command]" - Execute a node command
	@$(DOCKER_RUN_NODE) $(c)
 
yarn: ## args: c="[command]" - Execute a yarn command 
	@$(DOCKER_RUN_NODE) yarn $(c)


## 
##Dependencies
##-----------------------------------------------------------------------------
.PHONY: installReq install update

installReq: yarn.lock node_modules/

node_modules/: yarn.lock
	@make -s yarn c=install

yarn.lock: package.json 
	@make -s yarn c=install

install: | package.json ## Install dependencies
	@make -s yarn c=install

update: | package.json ## Update dependencies
	@make -s yarn c=upgrade


## 
##Project 
##-----------------------------------------------------------------------------
.PHONY: buildReq build start serve

buildReq: build/

build/: public/ src/ node_modules/
	@make -s yarn c=build

build: installReq | src/ ## Build project
	@make -s yarn c=build

start: installReq | src/ ## Start project
	@make -s yarn c="dev -- --host"

serve: installReq buildReq ## Serve project
	@$(DOCKER_RUN_NODE) sh -c "yarn global add serve && serve -s build"

##