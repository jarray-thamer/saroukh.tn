import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { Lucia, User, Session } from "lucia";
import prisma from "./lib/prisma";

const adapter = new PrismaAdapter(prisma.session, prisma.user); // your adapter

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		// this sets cookies with super long expiration
		// since Next.js doesn't allow Lucia to extend cookie expiration when rendering pages
		expires: false,
		attributes: {
			// set to `true` when using HTTPS
			secure: process.env.NODE_ENV === "production"
		}
	},
	// get user information from the session
	getUserAttributes: (attributes) => {
		return {
			userName: attributes.userName,
			firstName: attributes.firstName,
			lastName: attributes.lastName,
			avatarUrl: attributes.avatarUrl,
			googleId: attributes.googleId
		}
	}
});


// IMPORTANT!
declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	userName: string;
	firstName: string;
	lastName: string;
	avatarUrl: string | null;
	googleId: string | null;
}