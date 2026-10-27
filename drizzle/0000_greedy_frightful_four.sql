CREATE TABLE `challenges` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` integer NOT NULL,
	`used` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `estimates` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` integer NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`city` text NOT NULL,
	`answers` text NOT NULL,
	`files` text NOT NULL,
	`rate_key` text NOT NULL
);
